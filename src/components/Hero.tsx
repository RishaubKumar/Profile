import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="w-full py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 flex justify-center items-center">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Hello! 👋 I’m</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Rishaub Kumar</h1>
          <p className="text-lg md:text-xl text-secondary mb-6 max-w-xl">
            I’m a Computer Science student and full-stack developer passionate about building scalable web applications and solving real-world problems with code.
          </p>
        </div>
        <div className="flex-shrink-0">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary bg-gray-200 dark:bg-gray-700 flex items-center justify-center shadow-lg">
            <Image
              src="/profile-placeholder.jpg"
              alt="Professional photo"
              width={224}
              height={224}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 