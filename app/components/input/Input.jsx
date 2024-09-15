export default function Input(props) {
    return (
        <div className="drop-shadow">
            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-700">{props.label}</label>
            <input type="text"
                   id="default-input"
                   placeholder={props.placeholder}
                   className="placeholder:text-gray-400 w-full placeholder:text-right border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 focus:outline-none focus:ring-1"/>
        </div>
    )
}