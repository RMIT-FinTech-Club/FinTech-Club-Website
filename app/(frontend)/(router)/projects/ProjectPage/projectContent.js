function ProjectContent({ name, content }) {
    return (
        <>
            <div className='project-title'>{name}<span>Projects</span></div>
            <p className='project-text'>{content}</p>
        </>
    )
}

export default ProjectContent;