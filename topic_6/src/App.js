import React from 'react'
import Blogs from './components/blogs'
import Profile from './components/profile'
import Panel from './components/panel'

export default function App() {

    const posts = [
        {
            title: 'Lorem',
            description: 'Sed mattis nunc',
            imageURL: 'images/workshop.jpg',
        },
        {
            title: 'Ipsum',
            description: 'Sed mattis nunc',
            imageURL: 'images/gondol.jpg',
        },
        {
            title: 'Dorum',
            description: 'Sed mattis nunc',
            imageURL: 'images/skies.jpg',
        },
        {
            title: 'Mingsum',
            description: 'Sed mattis nunc',
            imageURL: 'images/rock.jpg',
        },
    ]

    const tags = [
        'Travel',
        'Adventure',
        'Lifestyle',
        'Business',
        'Technology',
        'Food',
        'Fashion',
        'Music',
        'Entertainment',
    ]

  return (
    <div id='main'>
        <div className='max-w-[1400px] mx-auto'>
            <div className='flex flex-col justify-center items-center pb-16 pt-10'>
                <h1 className='text-3xl'>MY BLOG</h1>
                <p>Welcome to the blog of <span className='bg-black text-white p-1 text-xs'>NGO NAM</span></p>
            </div>

            <div className='lg:flex gap-8 mx-2'>
                <div className='' style={{flex: '2 1 0%'}}>
                    <Blogs title='Wood' imageURL='images/woods.jpg' description='This is the description of this blogs =)) thanks for watching' content='This is the content of this blogs =)) thanks again thanks again thanks againthanks again thanks again thanks again thanks again thanks again thanks again thanks again' comments='100'/>
                    <hr className='my-5 border-white'/>
                    <Blogs title='Bridge' imageURL='images/bridge.jpg' description='This is the description of this blogs =)) thanks for watching' content='This is the content of this blogs =)) thanks again thanks again thanks againthanks again thanks again thanks again thanks again thanks again thanks again thanks again' comments='100'/>
                </div>

                <div className='space-y-10' style={{flex: '1 1 0%'}}>
                    <hr className='my-3 border-white lg:-my-5 lg:border-white'/>
                    <Profile />

                    <Panel title='Popular Posts' posts={posts}/>

                    <Panel title='Tags' tags={tags} isTags={true}/>
                </div>
            </div>

        </div>
        <div className='p-5 bg-gray-500 mt-10'>
            <div className='space-x-1'>
                <button className='px-3 py-2 bg-black/10 text-white cursor-not-allowed' disabled>Previous</button>
                <button className='px-3 py-2 bg-black text-white hover:bg-gray-300 hover:text-black'>Next »</button>
            </div>

            <div className='mt-5'>
                <p className='text-white'>Powered by NGO NAM</p>
            </div>
        </div>
    </div>
  )
}