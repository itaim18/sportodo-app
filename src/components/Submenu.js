import { useGlobalContext } from "../context";
const Submenu = () => {
  const { isSubmenu, setIsSubmenu } = useGlobalContext();
  const handleClickLink = () => {
    setIsSubmenu(false);
  };
  return (
    <>
      {isSubmenu && (
        <div className="submenu">
          <ul>
            <li>
              <a onClick={handleClickLink} href="#sports">
                sports
              </a>
            </li>
            <li>
              <a onClick={handleClickLink} href="#about">
                about
              </a>
            </li>
            <li>
              <a onClick={handleClickLink} href="#contact">
                contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Submenu;
