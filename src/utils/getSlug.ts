export default function getSlug(file: string) {
  // matches filename (after last slash '/')
  // drops extension (after '.' if it exists)
  return file.match(/([^/.]+)[^/]*$/)?.[1] ?? file;
}
