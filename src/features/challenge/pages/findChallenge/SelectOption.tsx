interface OptionProps {
    children: string;
}
function SelectOption({ children }: OptionProps) {
    return <option className="font-bold capitalize">{children}</option>;
}
export default SelectOption;
