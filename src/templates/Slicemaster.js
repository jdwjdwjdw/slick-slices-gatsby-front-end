import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const SlicemasterStyles = styled.div`
  h2 {
    transform: rotate(-2deg);
    text-align: center;
    font-size: 4rem;
    margin-bottom: -2rem;
    position: relative;
    z-index: 2;
  }
`;

export default function SlicemasterPage({ data: { person } }) {
  return (
    <>
      <SEO title={person.name} image={person.image.asset.src} />
      <SlicemasterStyles className="center">
        <h2>
          <span className="mark">{person.name}</span>
        </h2>
        <Img fluid={person.image.asset.fluid} />
        <p>{person.description}</p>
      </SlicemasterStyles>
    </>
  );
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    person: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      slug {
        current
      }
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
