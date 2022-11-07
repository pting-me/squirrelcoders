import readingTime from 'reading-time';

type Post = {
  title: string;
  file: string;
  rawContent: () => string;
};

export default function getPostData(post: Post) {
  // matches filename (after last slash '/')
  // drops extension (after '.' if it exists)
  return {
    slug: post.file.match(/([^/.]+)\.{0,1}[^.]+$/) ?? post.file,
    readingTime: readingTime(post.rawContent()).text,
  };
}
