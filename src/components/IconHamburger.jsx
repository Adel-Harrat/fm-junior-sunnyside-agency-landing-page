export default function IconHamburger({ isOpen }) {
  return (
    <svg
      width="24"
      height="18"
      xmlns="http://www.w3.org/2000/svg"
      className={`${isOpen && "opacity-70"}`}
    >
      <path
        d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  );
}
