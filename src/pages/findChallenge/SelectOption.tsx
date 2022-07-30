interface OptionProps {
    children: string;
}
function SelectOption({ children }: OptionProps) {
    return <option className="font-bold">{children}</option>;
}
export default SelectOption;
