import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

function MaybeLink(props) {
  if (props.href) {
    return <Link {...props} />;
  }
  return <>{props.children}</>;
}

export default function BlogPostItemHeaderAuthor({author, className}) {
  const {name, title, url, imageURL, email} = author;

  let link = url || (email && `mailto:${email}`) || undefined;
  let displayName = name;

  // Check for patterns in the name
  const websitePattern = /<([^@<>]+)>/;
  const emailPattern = /<([^@<>]+@[\w.]+)>\s*$/;
  const githubPattern = /\(@([a-zA-Z0-9_-]+)\)/;
  const podPattern = /\(@([a-z0-9_-]+@[\w.]+)\)\s*$/i;
  const corepassPatternInside = /<corepass:(cb[0-9]{2}[0-9a-f]{40})>/i;

  const emailMatch = name.match(emailPattern);
  const githubMatch = name.match(githubPattern);
  const podMatch = name.match(podPattern);
  const corepassMatchInside = name.match(corepassPatternInside);
  const websiteMatch = name.match(websitePattern);

  if (corepassMatchInside) {
    link = `corepass:${corepassMatchInside[1]}`;
    const shortened = corepassMatchInside[1].slice(0, 4) + '…' + corepassMatchInside[1].slice(-4);
    displayName = name.replace(corepassPatternInside, `(${shortened}@cp)`);
  } else if (websiteMatch) {
    link = websiteMatch[1];
    if (!link.includes(':')) {
      link = 'https://' + link;
      if (link.endsWith('.eth')) {
        link += '.link';
      }
    }
  } else if (emailMatch) {
    link = `mailto:${emailMatch[1]}`;
  } else if (githubMatch) {
    link = `https://github.com/${githubMatch[1]}`;
  } else if (podMatch) {
    link = `https://${podMatch[1].split('@')[1]}/@${podMatch[1].split('@')[0]}`;
  }

  return (
    <div className={clsx('avatar margin-bottom--sm', className)}>
      {imageURL && (
        <MaybeLink href={link} className="avatar__photo-link">
          <img
            className="avatar__photo"
            src={imageURL}
            alt={displayName}
            itemProp="image"
          />
        </MaybeLink>
      )}

      {displayName && (
        <div
          className="avatar__intro"
          itemProp="author"
          itemScope
          itemType="https://schema.org/Person">
          <div className="avatar__name">
            <MaybeLink href={link} itemProp="url">
              <span itemProp="name">{displayName}</span>
            </MaybeLink>
          </div>
          {title && (
            <small className="avatar__subtitle" itemProp="description">
              {title}
            </small>
          )}
        </div>
      )}
    </div>
  );
}
