import Link from "next/link";

export function CTASection() {
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold">Book a Table Now</h2>
          <p className="mt-4 text-sm md:text-lg">Reserve your spot and enjoy an unforgettable dining experience with Paras Restaurant & Cafe.</p>
          <button
            className="mt-6 bg-blue-600 hover:bg-blue-700 hover:text-white px-4 py-2 rounded-md transition duration-200"
          >
            Reserve Now
          </button>
        </div>
      </section>
    );
  }

  