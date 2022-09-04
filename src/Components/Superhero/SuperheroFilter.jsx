import React from 'react';
import MyInput from '../UI/Input/MyInput';
import MySelect from '../UI/Select/MySelect';

const SuperheroFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search superhero "
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sorting"
                options={[
                    {value: 'nickname', name: 'By name'},
                    {value: 'realName', name: 'By real name'},
                    {value: 'superpowers', name: 'By superpowers'},
                    {value: 'catchPhrase', name: 'By catch phrase'},
                    {value: 'originDescription', name: 'By description'},
                ]}
            />
        </div>
    );
}

export default SuperheroFilter;