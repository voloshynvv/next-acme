import { lusitana } from '@/app/ui/fonts';
import { fetchPosts } from '@/app/lib/data';

const RecentPosts = async () => {
  const posts = await fetchPosts();

  return (
    <div>
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Recent posts</h2>

      <div className="flex flex-col gap-y-2 bg-gray-50 rounded-lg p-4">
        {posts.map((post) => (
          <article className="bg-white rounded p-4 py-2" key={post.id}>
            <h3 className="text-sm">{post.title}</h3>
          </article>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
