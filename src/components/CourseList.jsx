import React, { useState } from 'react'
import useCourseStore from '../app/store'

const CourseList = () => {

    const { cources, removeCource, toggleCourseStatus } = useCourseStore(
        (state) => ({
            cources: state.courses,
            removeCource: state.removeCourse,
            toggleCourseStatus: state.toggleCourseStatus

        })
    );


    return (
        <>
            <ul>
                {
                    cources.map((cource, i) => {
                        return <>
                            <li>
                                <span><input
                                    checked={cource.completed} 
                                    onChange={(e)=>{
                                        toggleCourseStatus(cource.id)

                                    }}
                                    type="checkbox" />
                                </span>
                                <span>
                                    {cource?.title}
                                </span>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button onClick={(e)=>{removeCource(cource.id)}}>Delete</button>
                            </li>
                        </>
                    })
                }
            </ul>
        </>
    )
}

export default CourseList