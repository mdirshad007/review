export default function Button({className,children,onClick}) {
  return (
    <button className={`bg-green-700 text-white font-bold text-base flex justify-center items-center h-14 px-5 gap-3 ${className} rounded-lg mt-5`} onClick={onClick}>
       {children}
    </button>
  )
}
