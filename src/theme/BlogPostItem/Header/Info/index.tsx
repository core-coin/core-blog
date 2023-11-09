import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import {usePluralForm} from '@docusaurus/theme-common';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';
// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
  const {selectMessage} = usePluralForm();
  return (readingTimeFloat) => {
    const readingTime = Math.ceil(readingTimeFloat);
    return selectMessage(
      readingTime,
      translate(
        {
          id: 'theme.blog.post.readingTime.plurals',
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One min read|{readingTime} min read',
        },
        {readingTime},
      ),
    );
  };
}
function ReadingTime({readingTime}) {
  const readingTimePlural = useReadingTimePlural();
  return <>{readingTimePlural(readingTime)}</>;
}
function Date({date, formattedDate}) {
  return (
    <time dateTime={date} itemProp="datePublished">
      {formattedDate}
    </time>
  );
}
function Spacer() {
  return <>{' ● '}</>;
}
export default function BlogPostItemHeaderInfo({className}) {
  const {metadata} = useBlogPost();
  const {date, formattedDate, readingTime, frontMatter} = metadata;
  const renderCategory = () => {
    if (Array.isArray(frontMatter.categories)) {
      const categories = (frontMatter.categories as string[]).map((cat, index, arr) => (
        <React.Fragment key={cat}>
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
          {index !== arr.length - 1 && ', '}
        </React.Fragment>
      ));
      return <>{categories}</>;
    }
    return <>
             {(frontMatter.categories as string).toUpperCase()}
           </>;
  };
  return (
    <div className={clsx(styles.container, 'margin-vert--md', className)}>
      {frontMatter.categories && (
        <>
          <Translate
            id="blog.categoryname"
            description="The name 'Category:' in the Blog">
            Category:
          </Translate> {renderCategory()}
          <Spacer />
        </>
      )}
      <Date date={date} formattedDate={formattedDate} />
      {typeof readingTime !== 'undefined' && (
        <>
          <Spacer />
          <ReadingTime readingTime={readingTime} />
        </>
      )}
      {frontMatter['discussion-to'] && (
        <>
          <Spacer />
          <Link to={frontMatter['discussion-to'] as string} target="_blank" rel="noopener noreferrer">
            <Translate
              id="blog.discussionname"
              description="The name 'Discussion' in the Blog">
              Discussion
            </Translate>
          </Link>
        </>
      )}
    </div>
  );
}
