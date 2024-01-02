import Link from "next/link"

export default function About() {
  return (
    <div>
        <h1 className=" text-2xl font-bold">AboutPage</h1>
        <button className="btn btn-link">
        <Link href={'/'}>
          Go to homepage
        </Link>
      </button>
    </div>
  )
}
