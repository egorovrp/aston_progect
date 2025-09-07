export const filterByLength = <T extends { title: string }>(
  posts: T[],
  minLength?: number,
  maxLength?: number
) => {
  if (!posts) return [];
  return posts.filter((p) => {
    const len = p.title?.length ?? 0;
    if (minLength != null && len < minLength) return false;
    if (maxLength != null && len > maxLength) return false;
    return true;
  });
};
