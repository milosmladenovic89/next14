
interface LayoutProps{
  children: React.ReactNode
 }

export default function DrinksLayout({ children }: LayoutProps) {
  return (
    <div className="w-full">
      
      <div className=" mockup-code mb-8">
        <pre data-prefix="$">
          <code>
            npx create-next-app@latest
          </code>
        </pre>
      </div>
      {children}
    </div>
  )
}
