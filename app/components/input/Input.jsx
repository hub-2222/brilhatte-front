export default function Input(props) {
    return (
        <div className="mb-6 drop-shadow">
            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-700">{props.label}</label>
            <input type="text"
                   id="default-input"
                   placeholder={props.placeholder}
                   className="placeholder:text-gray-400 placeholder:text-right w-1/2 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 focus:outline-none focus:ring-1"/>
        </div>
    )
}