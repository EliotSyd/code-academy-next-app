import Image from "next/image";
const Footer: React.FC = () => {
    return (
        <footer className="
        w-full 
        h-24 
        flex 
        justify-center 
        items-center 
        border-t 
        border-solid 
        border-gray-200">
        <a
          className="
          flex 
          flex-1 
          justify-center 
          items-center"
          href="
          https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    )
}
export default Footer