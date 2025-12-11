import { useInView } from 'react-intersection-observer';
import './SectionWrapper.css';

const SectionWrapper = ({ children, className = '' }) => {
  const { ref } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={`section-wrapper ${className}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
