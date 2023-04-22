import PropTypes from 'prop-types';
import { Container, SectionTitle, SectionWrapper } from './Section.styled';

export const Section = ({ mainTitle, title, children }) => {
  return (
    <SectionWrapper>
      <Container>
        {mainTitle ? (
          <h1>{mainTitle}</h1>
        ) : (
          <SectionTitle>{title}</SectionTitle>
        )}
        {children}
      </Container>
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
};
