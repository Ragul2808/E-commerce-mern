const types = {
    INPUT: 'input',
    SELECT: 'select',
    TEXTAREA: 'textarea'
};

function CommonForm({ formControls, formData, setFormData, onSubmit }) {
    function renderInputByComponentType(getControlItem) {
        let element = null;

        switch (getControlItem.componentType) {
            case types.INPUT:
                element = (
                    <Input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                        value={formData[getControlItem.name] || ""}
                        onChange={(e) =>
                            setFormData({ ...formData, [getControlItem.name]: e.target.value })
                        }
                    />
                );
                break;

            case types.SELECT:
                element = (
                    <select
                        name={getControlItem.name}
                        id={getControlItem.name}
                        value={formData[getControlItem.name] || ""}
                        onChange={(e) =>
                            setFormData({ ...formData, [getControlItem.name]: e.target.value })
                        }
                        className="border rounded p-2"
                    >
                        {getControlItem.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                );
                break;

            case types.TEXTAREA:
                element = (
                    <textarea
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        value={formData[getControlItem.name] || ""}
                        onChange={(e) =>
                            setFormData({ ...formData, [getControlItem.name]: e.target.value })
                        }
                        className="border rounded p-2"
                    />
                );
                break;

            default:
                element = (
                    <Input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                        value={formData[getControlItem.name] || ""}
                        onChange={(e) =>
                            setFormData({ ...formData, [getControlItem.name]: e.target.value })
                        }
                    />
                );
                break;
        }

        return element;
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
                {formControls.map((controlItem) => (
                    <div className="grid w-full" key={controlItem.name}>
                        <label className="mb-1" htmlFor={controlItem.name}>
                            {controlItem.label}
                        </label>
                        {renderInputByComponentType(controlItem)}
                    </div>
                ))}
            </div>
            <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                Submit
            </button>
        </form>
    );
}

export default CommonForm;
