import ImageForm6 from '@/components/projects/projectImagineForms/Form6'
import ImageForm7 from '@/components/projects/projectImagineForms/Form7'
import Decor2 from '@/components/projects/projectDecorForms/Decor2'

const fakeAPI = {
    introduce: {
        images: [
            'https://s3-alpha-sig.figma.com/img/03b3/3b3c/344fca8a48d470e7139a74fd62e70503?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W7HQHohEw-YUW3JbcmTk6EilkrqtIkBjXmDFLMWTs7TzzLUDAgZSelarGdTFx1gybRJxLTaq~zId2XeKHTULYY0QIMR4RVX-An0Mmr1jRHXo4hY0ljNBtP3y60IwskeoZcOcocdI1ywT3tEHc02~Q-6K7Cil08z0bx3P9UEWP880nKJGAkSEtqKA~f~9kgjdxTeVg0Kwj9AbCRzVpTjZxL0xERB66MjvPEah-1ZR5k69tFhi--~RBdS1nOnOg-McAoe6uR3M-TuEIT9UFJj-nwejIlyYRUGLudECbnTxY1l~qb1Khn4R9lwOpmI~bKmfav5cGE5~PjTH37OmkBAjhA__',
            'https://s3-alpha-sig.figma.com/img/cf28/b3c8/36b0c0d5e3de5cc3da163a5095864e68?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P6KObiEjQLC41NySaaeidd9vwlKKtYBhBHVEyVe9m-z2MgGvgnZQgF5QrfryeCbY8gk2ws1UzvYCX3mb9lzJJnZDdEiV29nKKT9avZQ6C9qYFkkyL5232R~WRiiS6txtyI08~2wfOyigEboNsynue3XqlNxNBgas92ILVXkMvpdk9y9h~hHDYL-QLsVWbUIjEIW2hoFhCc-CW7zFjyOre~tqOEeJFmTy~zV442tWCJ1D2ohiKCQxoi8TH10zgm72-GGp-DK3TZwBWbRsBV3u2L0rGtrmiPgdeWVHqwuUMljQRCwOddV3c4Ga4seR2eq277g2RHGYvKi79ZWXB-SVmQ__'
        ]
    },
    cards: [
        {
            title: {
                normal: 'Media',
                highlight: 'Project'
            },
            ImgForm: ImageForm6,
            DecorForm: Decor2,
            content: 'Lorem ipsum dolor sit amet consectetur. Phasellus interdum eros eu morbi. Nullam semper non maecenas turpis mauris turpis. Lectus facilisis mattis tellus volutpat eu ut condimentum consectetur. Enim sed egestas velit amet egestas turpis cursus. Aliquam purus augue mi cras donec cras. Odio id risus sed nullam nunc quis platea consectetur.d nullam nunc quis platea consectetur.',
            images: [
                'https://s3-alpha-sig.figma.com/img/e2d0/7e3f/3d782e72f929b01855dd229d67c5610c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jbFSJiUpni9nnk2Hgfbu1JD5rL6gJyRBjf~80FgCa0AlZes7yfaHjqw6RVmuk1VyaM9kjmFPw47or8p75FwSb5rjTaLZSf7WzyDvT7zojQEdGWbEEzCFmuyzExK4Pk0HWaU7YYFV9UBhoTCVgg4Oh2VRHWJmb0o2LGlcnWT0F3SxBtHLquq612vMPCc-Xt1KzsGCj4SZhEcuqfYCwU1xIvVmA3ilYrHdEH4Eg3EqF5EYgaI8W0byzqEh0oZI92GndnGmdRXDBckOQDt~-rLzvvI9fkZmIcJgAoJfPtI0TBgPcn94qZG03rg6GNxdmLhFq3RvGzXcN5L7mRwoT18~EQ__',
                'https://s3-alpha-sig.figma.com/img/1587/650f/c11a3b071ab6ec8a0d40fd69b19ff5f5?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cxWiZ1vfNznwcXWNImhkfF976HnZfsRMHK~Ll0iQXlwVxRKndk5M2W3ZmNmsU1LvYpC0vggwhhBJw37OxzG1mJ4h-TazkVpSNcOCT9iTf0VGh~6G-RMoWv3lgOP8u3-OMijH69bVXwdAGvAXDBMVzTRdu7lv9yUgg4rDXaOiMfuwBHu2dA4GC6dAJKGlmvOtfKb4hteXD4z8FVMgSomfEA8ZNrD7JvQGsPg7OKxVRlVsCIxX3cgxyTKKMavSxVRqul-lCeXRv9z1dF2kRRzyCkDrlGFDDJ200wr18-apQq9dYjJhh-9LrK44ZU9J1oJe~bgoZjvbNwu48augEQwpfw__',
                'https://s3-alpha-sig.figma.com/img/92c1/3dde/473f9e34a382763b8a6b882547bfafd1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EDuPW3QvFsJWNI9EoWUMsLyuzfcJlqyCz-SXnR6ZxbJKU5WQtR7WCqeAT3OIEQ14OtohA2vuodIbGJchhV-AENvTWltyyph26VXwILBcEKEJ~7lyG1IWM6~zhjhMe4KhzSiWOJ7leM1uklShndxRMhedzIHet0HcP8gQ4~e~a~a6NGr3TdPY0Eiekq5dcdN2U-XzIhRtrFOXWz0VrNrTfFHc3HMXxt-90cWey-6TXxyef2Tpb8hpj2JoFHxNmlME2czPsaIkG7ptCZW5qoahU2UxJbgYY8KVbtHpfQ~ix-W55xnxxmoXj068p0ACQBHUnfH26SNLUgL-XfwZdYEFgQ__',
                'https://s3-alpha-sig.figma.com/img/a9b0/0530/a68d664572c6754bc1d8093b6505d227?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mTaW~yJlRyMxAtu6DUl21NYf1JbZk~Ayl25FEwnR6vCXg2DOvaHAqRNkHu~DtV~N-TwMeB8MmzZO8ApLWOIFiKmjw0heV5Ny6JKf8bINCH8yOPPc0Wha2y9YDmJuWOuRKRTqynZx6N9cMu3-lbZ4m5Jbgbry-siBi8iUSuyMQUAMhN9yf39Iqop4muxPM9XKYsQ17he2DvY4y5~YHrkRnXZwl5TMK9ECCc9oNLM9Aik23WLl8io~ybw0Za4A9hmKzaAAdDK3o049FhDR2I~nbcd2edGBoo5llLAnuq32ft1jLTSel-ZgI7MzJT88EAyjTpHbR7ziAboVG-aWjOuXKA__',
                'https://s3-alpha-sig.figma.com/img/d724/3b35/77bf1077e8ed205f696de1f30458ee52?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-MTfWNboSJhISMBkn4IWeroA5DXx2yLmYicEs1b8mSnIVSkpMjMG7DihGV2COlK6ZIV72HSH~ZaMhUpIKjkRarqjdMNj5Tpebe6ZOBvez4qZSLv80pllgACvtcrzpC1bzuP0UkrJUCm~W82b7WSO~Nn4krHgr-zMmAGFu3KUXf7TZOsS1ahn8YFQfDdHpAFK~TiMmJIQffpmDyUrBQiFQiRIDVRdOUt9g~TDpsNcyAGPnSUwP4VkCYRANece~sHQykxrxi1ANEozKB8x4D-1uz8hl34RmnGqWABIIw2CKGxO1ljvMvPZb9MIrO6md4i3zCuoQhIPO0xUB0vXnAPhQ__'
            ]
        },
        {
            title: {
                normal: 'Media',
                highlight: 'Project'
            },
            ImgForm: ImageForm7,
            content: 'Lorem ipsum dolor sit amet consectetur. Phasellus interdum eros eu morbi. Nullam semper non maecenas turpis mauris turpis. Lectus facilisis mattis tellus volutpat eu ut condimentum consectetur. Enim sed egestas velit amet egestas turpis cursus. Aliquam purus augue mi cras donec cras. Odio id risus sed nullam nunc quis platea consectetur.d nullam nunc quis platea consectetur.',
            images: [
                'https://s3-alpha-sig.figma.com/img/f3f8/4451/ffbee25b725dac98a7d5b25a12f6017e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZfOUa8PqST5nJTSwkWGTkdUsAHnFZuQjV6AkALkCImx033g21h8QoEPFbwDD60jYc-lZM6Fef9sKW63i8u8SJX82ZLSuqEpDpRv-LoxrXy~~OZ1GJyFbbvrzJ31Z6--0NObHdH763xMzQIpXax0V4KinAybw9E-5-dv4QmCLaGnDGFt~2jg~6dngc9~CQYgAYfF-PinAImjqGyznA8miAPRrXkoBxP~v-zSoOJt89WLe~WKRivRDbj0ZBDwsJq6tNgxa4QDp8JOomseJE8Kwj-KvljHMcDBmjY9aB144jvQN0x4DCAvQVf2muKpRxWtNe-xjHoptNlteCkR-RUoPNA__',
                'https://s3-alpha-sig.figma.com/img/746a/10a8/d1bffefcdc61f932a4279f23a232a067?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lbAX2G9VQtaOqVitCb~zvs5hEzDvUv844r3epLHkFFEMdEOpZ7~4RymeUooluADGnZ5SVjEjsaiEGXBOWrn4zM~G7VPVMmrhvxsVid6cFQz1WdU3mDIyfMT7xUqOmF423pYqkwx~kQ4pj0TUl3bKEyhQrfeLDViP2eltrqUeZsreBDBKk4z9Ob31sr6lgy2~T5lxYu91l8R13BbQM5ZeF5BOCheWMgZ7DvuxUd0SDBM8-rCyycA8qxOvt4da1ya-b9ieeebuqUqmx-6Oa071fgXsMtGpBzpxP023Bsr9bfhBQgMoRNDWV0nOxhVxt4Lt4-RqKdvNYiJNJcw6I131gw__',
                'https://s3-alpha-sig.figma.com/img/0a42/d2b9/2de55d717ff728378cbbfd79a487b068?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a8xHaabMuFUt6NlkdcBhT-Z2undM3ojkNM8PWAZDvcBTlTHg1C2rD0z0XcRP5M0~GHg2UccoptWi0GXspugwViTMqewxbiAx4mzGTGbdlrKZ9~4ci9vuW7~Hu9TL3NtPgunJNd2hewiVOiz6a1QV0ag3C43wbH0qjVCcNCUvb-YLaumVieheXaPHxOndsAgxuQJ2nnIeJ8z1B~RQytviukbtp-VXlvdzJB54t7obSIL-A885619DjNAHU7UM3nMGniLvGadFZ6fGIkeNId4~XyI9pZaNdMUIL8TqFvMe4~Fh1pXvp4SWGK~fbGHXsmE2HxGiyYIsFePBdJ12vM-28Q__',
                'https://s3-alpha-sig.figma.com/img/0a51/3264/e2f20485e5c1b578cc1f1588a48709ef?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FeQ15KLLhp8XBgz4H0IoB-74ExHXvg88a2c0Q4I8vU6ajbfyxbDJ4J2qqkKi6sdIMPqQyYcKMhixn5o3RtUorTmcnK7E6jJYJpT2RaytAiXPUeDuIYOHHi83LgRaKiQXzj2LXQTCklpvYOblCjDH~ekGEIguDqC0mBeNFrrul5OBE5znhwLECYmOgUpS3Vt0DoUdCHXCGjP2GHGiUeGWXdvU~E-67MPSzkh1LC2HCvvltHr38oMUgCKI6w~FqN~o3pSSs-V0LwDzMvVGZKQ3jLGPkbciSGyRem5Tt3OQMBGlAvMOt0JNBXuBL~NN9xWctLwBqK-sYvk03HQccAFJ9Q__'
            ]
        }
    ]
}

export default fakeAPI