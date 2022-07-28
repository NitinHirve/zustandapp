import React, { useState } from 'react'
import useCourseStore from '../app/store';

const CourseForm = () => {


    const addCourse = useCourseStore((state) => state.addCourse)

    const [courseTitle, setCourseTitle] = useState('');
    console.log('course form rendered');

    const handleCourseSubmit = () => {

        if (!courseTitle) return alert('Please add a course Title');
         addCourse({
            id : Math.ceil(Math.random()*1000000),
            title :courseTitle,
         })
         setCourseTitle('');
    }

    


    return (
        <>
            <div>
                <input value={courseTitle} onChange={(e)=>{setCourseTitle(e.target.value)}} type="text" />
                <button onClick={()=>{handleCourseSubmit()}}>Add cource</button>
            </div>
        </>
    )
}

export default CourseForm