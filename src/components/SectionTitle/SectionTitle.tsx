import styles from './SectionTitle.module.scss';

type SectionTitleProps = {
  title: string;
  withLines?: boolean;
  linkText?: string;
};

export default function SectionTitle({
  title,
  withLines = false,
  linkText,
}: SectionTitleProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={`${styles.title} ${withLines ? styles.withLines : ''}`}>
        {title}
      </h2>

      {linkText && (
        <a href="#" className={styles.link}>
          {linkText}
        </a>
      )}
    </div>
  );
}