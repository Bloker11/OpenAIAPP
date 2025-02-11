import Link from "next/link";

const HomePage = () => {

  return (
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">GPTGenius</h1>
          <p class="py-6">
            GPTGenius: Your AI language companion. Powered by OpenAI, it
            enhances your conversations, content creation, and more!
          </p>
          <Link href={"/chat"} class="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </div>
  );

};
export default HomePage;
