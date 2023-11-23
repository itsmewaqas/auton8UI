import React, { useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import strings from '../sharedcomponent/localization';
import { BiExpandVertical } from "react-icons/bi";
import Select, { components } from "react-select";

function ReactSelect(props) {

    const data = useSelector((state) => {
        return state
    });

    let getLan = data.lang.langType;
    const culture = getLan === 'ar' ? strings.ar : strings.en;

    const DropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                <BiExpandVertical style={{ color: '#000' }} />
            </components.DropdownIndicator>
        );
    };

    const selectStyles = {
        control: (base, state) => ({
            ...base,
            backgroundColor: '#fff',
            borderRadius: '6px',
            minHeight: '34.6px',
            border: '1px solid #E9ECEC',
            boxshadow: 'none',
            '&:hover': {
                border: '1px solid #00DB79',
            },
            borderColor: state.isFocused ? 0 : 0,
            boxShadow: state.isFocused ? 0 : 0,
        }),
        // dropdownIndicator: (base) => ({
        //     ...base,
        //     color: '#000',
        // }),
        multiValue: (base) => ({
            ...base,
            backgroundColor: '#F1FDF9',
            color: '#15B79E',
            border: '1px solid #E9ECEC',
            boxSizing: 'border-box',
        }),
        multiValueLabel: (base) => ({
            ...base,
            backgroundColor: '#F1FDF9',
            color: '#15B79E',
            
        }),
        multiValueRemove: (base) => ({
            ...base,
            backgroundColor: '#F1FDF9',
            color: '#15B79E',
            ':hover': {
                backgroundColor: '#F1FDF9',
                color: '#15B79E',
            },
        }),
        clearIndicator: (base, targetHeight) => ({
            ...base,
            padding: `${(targetHeight - 10 - 1 - 1) / 2}px`,
            display:'none',
        }),
    }

    return (
        <div>
            <Select
                components={{ DropdownIndicator }}
                options={props.optionList}
                placeholder={props.selectPlaceholder}
                value={props.selectValue}
                onChange={props.handleSelect}
                isSearchable={true}
                className='customSelect'
                styles={selectStyles}
                isMulti
            />
        </div>
    );
}

export default ReactSelect;