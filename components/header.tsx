const Header: React.FC = () => {
    return (
<header  className="h-16 px-8 bg-gray-300 text-blue-700 w-full sticky top-0 flex items-center justify-between">
      Next.js
	<span>
    <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-blue-600">
  <span className="material-icons">face</span>
</div> </span>

</header>
    );
}
export default Header;