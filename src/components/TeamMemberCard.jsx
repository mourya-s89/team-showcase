import react from 'react'

const TeamMember = ({data})=>{

    return(
        <div>
            <h2>{data.name}</h2>
            <h1>{data.title}</h1>
        </div>
    )
}


export default TeamMember;