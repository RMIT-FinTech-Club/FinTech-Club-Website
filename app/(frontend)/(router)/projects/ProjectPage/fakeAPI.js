import ImageForm1 from '@/app/(frontend)/(router)/projects/ProjectPage/projectImagineForms/form1'
import ImageForm2 from '@/app/(frontend)/(router)/projects/ProjectPage/projectImagineForms/form2'
import ImageForm3 from '@/app/(frontend)/(router)/projects/ProjectPage/projectImagineForms/form3'
import ImageForm4 from '@/app/(frontend)/(router)/projects/ProjectPage/projectImagineForms/form4'

const projectAPI = [
    {
        name: 'Technical',
        url: '/projects/technical',
        imgForm: ImageForm1,
        imgLinks: [
            'https://s3-alpha-sig.figma.com/img/5a8b/214e/a6b498b573193ac6714e8941407d3c4e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KgEKFmReW4Wtf1aIBHeqhKOES75e~OM3Hu2AChuIhrcijkRtbleiJRLBwj5DdfLrFPt8dtCnLTnv818zpXZ~EgCMZEhbh9AWOg55clXbwX~GYKHH6wolOS4ex8T7EtgS0qJMc204B5SGSJvWL9Nkb0oRGvClY-XmQTKnxFwUx2yaGMAI4qUHQrJE400ynL~Asc0gChctdFgmpMggvTTttBXbnLBojAgGXCzqiAsaib2C7IVfWH9PHmfOlCXf8p4bOv~GC9v7D-cSJrmf2Rg4Jka6VnC8sRYQF3f0PVRCw5ufHZ4RxDEU1jVGj5tJ4aLi6CShC5Kr~UR9b~2Gb-nJtg__',
            'https://s3-alpha-sig.figma.com/img/748b/f2ca/d38e05df8592e0485ed7f30e4eba4606?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKeb1ea9LUzQPHzzNLwE617Z094iRdLSggqaTVFlSIBES2XlkfdqdMD6F2cxz-ihFv4h30E0-qSLRUScufjJOor7O93GGjU754JmDU2yexvbJEKVpo-JV~8FNYUuxy~QkZ1K3giZHVnlB-uPgoZrVVi41E7UGJSRtvTbIC9hrvjtCf31ql1jvqp~5TvYVI3P7rvqeMl4WcGlf7cR2n8YE2Z~mqxf2hU8eWYgsTAvDT8jEHmOeF28-9dtE-QOuSZ3ko2Xc~Gv2teEycbvfFn8CS2Iu9YD~dX85lLqRrzmauQV7vnWZOgt9kAQTWC7ly1gNa-DzytN4lZAtYn~VHx~Qg__',
            'https://s3-alpha-sig.figma.com/img/49d2/d56e/b6cdfa032b13761edeb1e7c274a4e941?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YOxkJvgaHgQRXvOYKY4AgkI9QJCHouVFIgjePTUi4SBSBMlLAQ4F8-tGYISWPTsY8JHVBLAfaHjGWrn2YbIi3clgLyPrgosVcncH~JeYzpDUJlfa2NWind0n8gQ1n~zD8ZNrTp0CU1dUZjHGrKj4vwY0EgLYa8Vd7AJlEvi63jWBaN7W5sYWl6P4xnxA2X49H-jI9w-XmJxxRnR018kxZ9pLmIghUyaDmra9RSP8bPciX8c5FgG0SyRDzJJfgG~0wizDGHZ73GQr9tTImUduScRbVMN6YDmiXRAKEONp7ZWgytALmzPsBIvx3y7R0RJ5UUA2lxfp7DrnVz-d7gWIgw__'
        ],
        content: 'Lorem ipsum dolor sit amet consectetur. Phasellus interdum eros eu morbi. Nullam semper non maecenas turpis mauris turpis. Lectus facilisis mattis tellus volutpat eu ut condimentum consectetur. Enim sed egestas velit amet egestas turpis cursus. Aliquam purus augue mi cras donec cras. Odio id risus sed nullam nunc quis platea consectetur.d nullam nunc quis platea consectetur.'
    },
    {
        name: 'Academic',
        url: '/projects/academic',
        imgForm: ImageForm2,
        bgc: '#F0EDFF',
        imgLinks: [
            'https://s3-alpha-sig.figma.com/img/1d1d/d10b/6e521e86c3913dbae396f908854f53ac?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=goWaVxkNPlWUnc9CmXjsQAmYWCQRXYDBKtHAR5za0btMW8oSVcbCBk1GNWAsStDrZQeEVeIusvDkrSn64Y2eAi22ZblnEWcLlIsxUqKPqljKkzTKU29N47tH~aWp4Ol8I1Lq6WlqsCfScyqMEss~bLSRoX3bulHtJ99F1b7YgrnaSqBM9ARpfNtVZknkMYkPm0NX3m3zawgbibB-hClgiVlYSeb~-8YUMmVzkEbzei7BJBWzMdNrEHlqDnZVB4LDuW3xt4DniHq3~HdANAhDIWimXjetAiV2De2MLTjGEwuO-LqpRlHcYNnqJ8rvmvyy1M~XrkAiuoXlwO9KDOGogA__'
        ],
        content: 'Lorem ipsum dolor sit amet consectetur. Phasellus interdum eros eu morbi. Nullam semper non maecenas turpis mauris turpis. Lectus facilisis mattis tellus volutpat eu ut condimentum consectetur. Enim sed egestas velit amet egestas turpis cursus. Aliquam purus augue mi cras donec cras. Odio id risus sed nullam nunc quis platea consectetur.d nullam nunc quis platea consectetur.'
    },
    {
        name: 'Media',
        url: '/projects/media',
        imgForm: ImageForm3,
        imgLinks: [
            'https://s3-alpha-sig.figma.com/img/61a4/1059/66172d65e0410301884ebc6124363995?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ep3oSrdjKnkOTd6x4hzpLhHGniUpBevwXfMnh0Ja69VKjHBFvO3ZQsbPdSR8H5qJmuFIKb9qirxRyFqynbMfmPstnlzu9GJnXwe5cB0wp3c3ivqJB0oYUBsr0BYja1X~mg9JPwmUjgGdcXyZpDbNcsuFSJTCaZadmNb-TFsy8I6c2VuKCuwdq5mL~OHxj8j8RhfR-mZRCt4V-qfGsZ0MQIo7nZ48wE9Rf24J06k7Mv8yAEGTjJdJFX6JHM1juIKmVwXP9NBj3wWWhUspP~tpgi5MDqjImv86JwXE1JNVY-k2jMrR6~8vv9YYx5t~FEQIA4E8z8JZkxKAU5yazSf8IA__'
        ],
        content: 'Lorem ipsum dolor sit amet consectetur. Phasellus interdum eros eu morbi. Nullam semper non maecenas turpis mauris turpis. Lectus facilisis mattis tellus volutpat eu ut condimentum consectetur. Enim sed egestas velit amet egestas turpis cursus. Aliquam purus augue mi cras donec cras. Odio id risus sed nullam nunc quis platea consectetur.d nullam nunc quis platea consectetur.'
    },
    {
        name: 'Event',
        url: '/projects/event',
        imgForm: ImageForm4,
        bgc: '#FFEFCA',
        imgLinks: [
            'https://s3-alpha-sig.figma.com/img/8d6b/37a6/4866ddcec58c4a6f9d3e3705359fc1bd?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JtEi6C8Dfu2VGjxEWve3YdNB5sDlHMlbKQ4Pl869-xBYzEJ-Nf1xYHoGX99AKKAmomRnH4MbjROGsKIECuanYY-7c9bTU5RLC739ipkBoyoh-lq6kReGMLPSVawYIY1ktjAcCA2WMuPuBVORjLyjglG99Vc7OKHTxX4yhZ6Xbbv1GUbdGkVedtDdLpI~II0JrUfEP4a9hAPoK~KfBvBazuXjGWI9LOOzcK21kj1f-NZL12sMAEvMScfmUY1Q3m9cvugGAuN1XNsajbqr~ZlFs3Cx~fL15bj~5vGHl7viC0Pr7846vAk4INH8qYbvkSVjCStxz2wCnnryhgDyLOUJJg__',
            'https://s3-alpha-sig.figma.com/img/740e/b219/b79eb7bb2ba4da6014821709c76155f0?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W03vg1AYRZYhWpHmF4ks4HDwETY4PLSbkj92VTJeyfOZpBggO-6U9i3h~RKH6y0A9QMtjia9UzREJufz9r~mHFLSBAcsghLX3y403mlOnpnndqBlBL17y0MB-9ciAvV1Lvl2pq2yRQyM~2sAennnS5-~n0K~u41W1AgacoqMrObwE0OtbeENpFLKIBjdRzSm2FTxW4Hcyi2QE54PGgI7TZqf3Yqc5D6Yf6QC6HI6~WDq1vUwlgeJrrHuB1oGLZ8ApY8uRxiyfMKVQtwgzfXtqMigLEdDHaofJB06qbmQSelu4aK6k3G70on1a0RmqYwcxlDyt-OO0HIutoFZYECkmA__'
        ],
        content: 'Lorem ipsum dolor sit amet consectetur. Phasellus interdum eros eu morbi. Nullam semper non maecenas turpis mauris turpis. Lectus facilisis mattis tellus volutpat eu ut condimentum consectetur. Enim sed egestas velit amet egestas turpis cursus. Aliquam purus augue mi cras donec cras. Odio id risus sed nullam nunc quis platea consectetur.d nullam nunc quis platea consectetur.'
    },
]

export default projectAPI