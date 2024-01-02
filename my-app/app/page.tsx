import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1 className=' text-3xl bold font-bold'>HOMEPAGE</h1>
      <button className="btn btn-link">
        <Link href={'/about'}>
          Go to about page
        </Link>
      </button>

    </div>
  )
}
