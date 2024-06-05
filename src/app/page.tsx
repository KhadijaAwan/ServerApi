const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to get users data:", error);
  }
}

interface UserProps {
  id: number;
  name: string;
  email: string;
  website: string;
}

export default async function Home() {
  const usersData = await fetchData();

  return (
    <div className="w-full py-10 px-5 md:px-10">
      <h1 className="text-gray-900 font-semibold text-center text-2xl lg:text-3xl uppercase mb-4">User Details</h1>
      <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6">
        {usersData.map((user: UserProps) => (
          <div key={user.id} className="bg-gray-50 rounded-lg p-5 text-center">
            <p className="mb-2 text-purple-800">User ID: {user.id}</p>
            <p className="mb-2 text-green-800">NAME: {user.name}</p>
            <p className="mb-2 text-blue-800">EMAIL: {user.email}</p>
            <p className="mb-2 text-orange-600">WEBSITE: {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
