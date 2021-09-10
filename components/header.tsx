const Header: React.FC = () => {
    return (
<header  className="h-16 px-8 bg-gradient-to-r from-blue-200 to-white  text-yellow-500 w-full sticky top-0 flex items-center justify-between">
      Next.js
	<span>
    <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-blue-600">
  <span className="material-icons">face</span>
</div> </span>

</header>
    );
}
export default Header;