import * as React from "react"
import { IAccordionProps } from './Accordion.types'
import './Accordion.scss'
import { FaAngleUp } from "react-icons/fa"


const Accordion: React.FC<IAccordionProps> = (props: IAccordionProps) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    React.useEffect(() => {
      setIsExpanded(!!(props.defaultIsExpanded))
    }, [props.defaultIsExpanded])
    
    const toggleAccordion = () => {
        props.onToggle && props.onToggle(!isExpanded)
        setIsExpanded(!isExpanded)
    }
    
    const styles = typeof props.styles === 'object' ? props.styles : typeof props.styles === 'function' ? props.styles({isExpanded}) : null
    
    return (
        <div style={styles?.root} className={`accordion-root${props.className ? ` ${props.className}` : ''}`}>
            <div style={styles?.header} className='accordion-header'>
                <button
                    onClick={toggleAccordion}
                    style={styles?.headerButton}
                    className='accordion-header-button'
                >
                    <span style={styles?.title} className='accordion-title'>{props.title}</span>
                    <span className="accordion-icon-root">{props.expandedIcon ? isExpanded ? props.expandedIcon({style: styles?.expandedIcon, className: 'accordion-expanded-icon'})
                        : props.icon && props.icon({style: styles?.icon, className: 'accordion-icon'})
                        : props.icon && props.icon({style: styles?.icon, className: isExpanded ? 'accordion-icon-expanded' : 'accordion-icon'})}</span>
                </button>
            </div>
            <div style={styles?.content} className={isExpanded ? 'accordion-content-expanded' : 'accordion-content'}>{props.children}</div>
        </div>
    )
}

Accordion.defaultProps = {
    icon: FaAngleUp,
    defaultIsExpanded: false,
}

export default Accordion















