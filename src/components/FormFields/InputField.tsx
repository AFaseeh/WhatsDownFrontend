
export default function InputField(
    {
        register,
        label,
        fieldname,
        type = "text"
    }:
    {
        register: any,
        label: string,
        fieldname:string,
        type?: string,
    }
)
{
    return(
    <div className="relative h-10  min-w-[300px] mt-1 mb-1 mx-3">
        <input
        type={type} 
        {...register(fieldname)}
        className="peer h-full w-full text-text rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm 
        font-normal text-blue-gray-700 
        outline outline-0 transition-all placeholder-shown:border 
        placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200
         focus:border-2 focus:border-primary focus:border-t-transparent 
         focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" "/>
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight 
        text-text transition-all opacity-0 before:pointer-events-none before:mt-[6.5px] 
        before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all 
        after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 
        after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:opacity-100 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75]
        peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent 
        peer-focus:opacity-100 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-primary peer-focus:after:border-t-2 
        peer-focus:after:border-r-2 peer-focus:after:border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent 
        peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        {label}
        </label>
    </div>
    )
}