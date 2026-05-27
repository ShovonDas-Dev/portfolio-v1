
const Button = ({ name }) => {
  return (
                <span
             
              className="
                px-4
                py-1
                rounded-full
                border
                border-mint/40
                text-mint
                text-[11px]
                font-medium
                bg-bg1/40
                backdrop-blur-sm
                transition-all
                duration-300
                hover:bg-mint
                hover:text-bg2
                hover:shadow-[0_0_20px_rgba(18,247,214,0.25)]
                cursor-pointer
              "
            >
              {name}
            </span>
  )
}

export default Button
