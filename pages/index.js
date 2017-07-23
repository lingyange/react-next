import Link from 'next/link';
import MyLayout from '../components/MyLayout';

const PostLink = (props) => (
    <li>
        <Link as ={`/p/${props.id}`} href={`/post?title=${props.id}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default() => (
    <MyLayout>
        <h1>My Blog</h1>
        <ul>
            <PostLink id="hello-nextjs" title="Hello Next.js"/>
            <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
            <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
        </ul>
    </MyLayout>
)