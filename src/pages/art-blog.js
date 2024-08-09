import React from 'react';
import Layout from '@theme/Layout';
import Card from '../components/Card';
import CardImage from '../components/Card/CardImage';
import CardFooter from '../components/Card/CardFooter';
import Columns from '../components/Columns/';
import Column from '../components/Column/';

export default function ArtBlog() {
  return (
    <Layout title="Art Blog" description="My arts">
      {/* <div className="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
    </div> */}

      <Columns>
        <Column className='text--left'>
          <Card>
            <CardImage
              cardImageUrl='img/g_dress_model.jpg' />
            <CardFooter style={{ backgroundColor: '#e37c77', color: 'black' }} className='text--center'>
              <div className='button-group button-group--block'>
                <button className='button button--success'>Like</button>
                <button className='button button--warning'>Comment</button>
                <button className='button button--danger'>Share</button>
              </div>
            </CardFooter>
          </Card>
        </Column>


        <Column className='text--center'>
          <Card>
            <CardImage
              cardImageUrl='img/school_photo.jpg' />
            <CardFooter style={{ backgroundColor: '#e37c77', color: 'black' }} className='text--center'>
              <div className='button-group button-group--block'>
                <button className='button button--success'>Like</button>
                <button className='button button--warning'>Comment</button>
                <button className='button button--danger'>Share</button>
              </div>
            </CardFooter>
          </Card>
        </Column>


        <Column className='text--justify'>
          <Card>
            <CardImage
              cardImageUrl='img/mushroom_house.jpg' />
            <CardFooter style={{ backgroundColor: '#e37c77', color: 'black' }} className='text--center'>
              <div className='button-group button-group--block'>
                <button className='button button--success'>Like</button>
                <button className='button button--warning'>Comment</button>
                <button className='button button--danger'>Share</button>
              </div>
            </CardFooter>
          </Card>
        </Column>

        <Column className='text--justify'>
          <Card>
            <CardImage
              cardImageUrl='img/tina.jpg' />
            <CardFooter style={{ backgroundColor: '#e37c77', color: 'black' }} className='text--center'>
              <div className='button-group button-group--block'>
                <button className='button button--success'>Like</button>
                <button className='button button--warning'>Comment</button>
                <button className='button button--danger'>Share</button>
              </div>
            </CardFooter>
          </Card>
        </Column>
      </Columns>
    </Layout>
  );
}