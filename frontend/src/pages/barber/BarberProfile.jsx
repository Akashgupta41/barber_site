import React from 'react';
import 'tailwindcss/tailwind.css';
import Avatar from 'react-avatar';

const ProfilePage = () => {
  const posts = [
    {
      id: 1,
      content: "Had a great time exploring the city today!",
      date: "2 hours ago",
    },
    {
      id: 2,
      content: "Just finished reading a fantastic book.",
      date: "1 day ago",
    },
    {
      id: 3,
      content: "Excited to start a new project at work.",
      date: "3 days ago",
    },
    // Add more posts as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-white shadow">
        <div className="h-40 bg-cover bg-center" style={{ backgroundImage: 'url(https://via.placeholder.com/800x200)' }}></div>
        <div className="max-w-2xl mx-auto">
          <div className="relative -mt-10 flex items-end justify-center">
            <Avatar name="John Doe" size="100" round={true} className="border-4 border-white" />
          </div>
          <div className="text-center mt-4">
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-600">Software Engineer at XYZ Company</p>
            <p className="mt-2 text-gray-700">Loving life and enjoying every moment. Always eager to learn new things and take on challenges.</p>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto mt-6 px-4">
        <h2 className="text-xl font-bold mb-4">Posts</h2>
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow mb-4 p-4">
            <p>{post.content}</p>
            <p className="text-gray-500 text-sm mt-2">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
