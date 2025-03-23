type Blog = {
  title: string;
  tags: string[];
  description: string;
  content: string;
  id: string;
  date: Date;
};

type BlogInfo = Omit<Blog, "content">;

type ProjectInfo = {
  title: string;
  description: string;
  link: string;
};
