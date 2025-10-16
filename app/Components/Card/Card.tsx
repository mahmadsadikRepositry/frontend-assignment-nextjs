export const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-2xl mx-auto">
           {children}
        </div>
    )
}