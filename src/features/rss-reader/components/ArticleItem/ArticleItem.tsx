import React from 'react';
import { Article } from '../../types';
import { Text } from '../../../../components/Text';
import { formatDate, stripHtml } from '../../../../utils';
import styles from './ArticleItem.module.css';

export interface ArticleItemProps {
  article: Article;
}

export const ArticleItem: React.FC<ArticleItemProps> = ({
  article,
}) => {
  const truncatedDescription = stripHtml(article.description).substring(0, 200) + '...';

  return (
    <div className={styles.articleItem}>
      <Text variant="articleTitle" href={article.link}>
        {article.title}
      </Text>
      <Text variant="meta">
        {article.feedTitle} • {formatDate(article.pubDate)}
      </Text>
      <Text variant="description">
        {truncatedDescription}
      </Text>
    </div>
  );
};