import Layout from '../components/Layout';
import Feed from '../components/Feed';
import Suggestions from '../components/Suggestions';

function Index({ posts }) {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Suggestions></Suggestions>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const data = [
    {
      id: 1,
      author: {
        id: 1,
        avatar:
          'https://p16-va.tiktokcdn.com/img/musically-maliva-obj/1658913186824198~c5_100x100.jpeg',
        name: 'Lucas Nhimi',
        username: 'lucasnhimi',
      },
      description: '',
      tags: [{ title: '#youtube' }, { title: '//#endregionclone' }],
      songName: 'WAP (feat. Megan Thee Stallion) - Cardi B',
      videoUrl:
        'https://v16m.tiktokcdn.com/657b987c8b79f2129bba1ff8a04d338d/613ab8d4/video/tos/useast2a/tos-useast2a-ve-0068c002/7fac200079f84425bf0658928b373308/?a=1233&br=1116&bt=558&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98CcAeUL4kag3&l=2021090919451601019020921659259630&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3F1bTc6Zm1qNzMzNzczM0ApZDppN2RmNzs1NzdlNWY6NWdqaC40cjRfcF9gLS1kMTZzc2EuLi4zMGM0XmItYF5fYjU6Yw%3D%3D&vl=&vr=',
      likes: 650,
      comments: 10,
      replies: 50,
    },
    {
      id: 2,
      author: {
        id: 1,
        avatar:
          'https://p16-va.tiktokcdn.com/img/musically-maliva-obj/1658913186824198~c5_100x100.jpeg',
        name: 'Lucas Nhimi',
        username: 'lucasnhimi',
      },
      description: 'Vídeo teste para clone de interface',
      tags: [{ title: '#youtube' }, { title: '#clone' }],
      songName: 'Tampa Curhat Beat - TampaCurhat',
      videoUrl:
        'https://v19.tiktokcdn.com/c40399bba1aa5d3f1a178153eb16f779/613aad6e/video/tos/useast2a/tos-useast2a-pve-0068/6f2011266ad542fea48be6a7d34f35a4/?a=1233&br=1878&bt=939&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98CcAeUL4kag3&l=20210909185652010189074145512264A5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am5pczs6ZnZ0NzMzNzczM0ApZzY0PGU7aWU3N2hlZGY8N2djZV9qcjRvNmNgLS1kMTZzc2ItXmEtNTNhMzJjXi81L2M6Yw%3D%3D&vl=&vr=',
      likes: 650,
      comments: 10,
      replies: 50,
    },
  ];

  return {
    props: {
      posts: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  };
}

export default Index;
