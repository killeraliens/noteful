import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import NoteList from './NoteList';
import Note from '../Note/Note';
//import context from '../testHelpers'
import toJson from 'enzyme-to-json';
import NotesContext from '../NotesContext'


// beforeEach(() => {
//   jest.resetModules();
// })

// const getNoteListWithContext = (context = {
//   notes: [
//       {
//         "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
//         "name": "Dogs",
//         "modified": "2019-01-03T00:00:00.000Z",
//         "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
//         "content": "Corporis accusamus placeat quas non voluptas. Harum fugit molestias qui. Velit ex animi reiciendis quasi. Suscipit totam delectus ut voluptas aut qui rerum. Non veniam eius molestiae rerum quam.\n \rUnde qui aperiam praesentium alias. Aut temporibus id quidem recusandae voluptatem ut eum. Consequatur asperiores et in quisquam corporis maxime dolorem soluta. Et officiis id est quia sunt qui iste reiciendis saepe. Ut aut doloribus minus non nisi vel corporis. Veritatis mollitia et molestias voluptas neque aspernatur reprehenderit.\n \rMaxime aut reprehenderit mollitia quia eos sit fugiat exercitationem. Minima dolore soluta. Quidem fuga ut sit voluptas nihil sunt aliquam dignissimos. Ex autem nemo quisquam voluptas consequuntur et necessitatibus minima velit. Consequatur quia quis tempora minima. Aut qui dolor et dignissimos ut repellat quas ad."
//       },
//       {
//         "id": "d26e0034-ffaf-11e8-8eb2-f2801f1b9fd1",
//         "name": "Cats",
//         "modified": "2018-08-15T23:00:00.000Z",
//         "folderId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
//         "content": "Eos laudantium quia ab blanditiis temporibus necessitatibus. Culpa et voluptas ut sed commodi. Est qui ducimus id. Beatae sint aspernatur error ullam quae illum sint eum. Voluptas corrupti praesentium soluta cumque illo impedit vero omnis nisi.\n \rNam sunt reprehenderit soluta quis explicabo impedit id. Repudiandae eligendi libero ad ut dolores. Laborum nihil sint et labore iusto reiciendis cum. Repellat quos recusandae natus nobis ullam autem veniam id.\n \rEsse blanditiis neque tempore ex voluptate commodi nemo. Velit sapiente at placeat eveniet ut rem. Quidem harum ut dignissimos. Omnis pariatur quas aperiam. Quasi voluptas qui nulla. Iure quas veniam aut quia et."
//       }
//     ]
// }) => {
//   jest.doMock('../NoteList', () => {
//     return {
//       NotesContext: {
//         Consumer: (props) => props.children(context)
//       }
//     }
//   });

//   return require('./NoteList').NoteList;
// };

//jest.mock('../__mocks__/Provider');

const context = {
    notes: [
      {
        "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Dogs",
        "modified": "2019-01-03T00:00:00.000Z",
        "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
        "content": "Corporis accusamus placeat quas non voluptas. Harum fugit molestias qui. Velit ex animi reiciendis quasi. Suscipit totam delectus ut voluptas aut qui rerum. Non veniam eius molestiae rerum quam.\n \rUnde qui aperiam praesentium alias. Aut temporibus id quidem recusandae voluptatem ut eum. Consequatur asperiores et in quisquam corporis maxime dolorem soluta. Et officiis id est quia sunt qui iste reiciendis saepe. Ut aut doloribus minus non nisi vel corporis. Veritatis mollitia et molestias voluptas neque aspernatur reprehenderit.\n \rMaxime aut reprehenderit mollitia quia eos sit fugiat exercitationem. Minima dolore soluta. Quidem fuga ut sit voluptas nihil sunt aliquam dignissimos. Ex autem nemo quisquam voluptas consequuntur et necessitatibus minima velit. Consequatur quia quis tempora minima. Aut qui dolor et dignissimos ut repellat quas ad."
      },
      {
        "id": "d26e0034-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Cats",
        "modified": "2018-08-15T23:00:00.000Z",
        "folderId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
        "content": "Eos laudantium quia ab blanditiis temporibus necessitatibus. Culpa et voluptas ut sed commodi. Est qui ducimus id. Beatae sint aspernatur error ullam quae illum sint eum. Voluptas corrupti praesentium soluta cumque illo impedit vero omnis nisi.\n \rNam sunt reprehenderit soluta quis explicabo impedit id. Repudiandae eligendi libero ad ut dolores. Laborum nihil sint et labore iusto reiciendis cum. Repellat quos recusandae natus nobis ullam autem veniam id.\n \rEsse blanditiis neque tempore ex voluptate commodi nemo. Velit sapiente at placeat eveniet ut rem. Quidem harum ut dignissimos. Omnis pariatur quas aperiam. Quasi voluptas qui nulla. Iure quas veniam aut quia et."
      }
    ]
}


describe('NoteList', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NoteList /> , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // it('should return a collection of Notes matching context', () => {
  //   const wrapper = mount(
  //     <BrowserRouter>
  //       <NotesContext.Provider value={context}>
  //         <NoteList />
  //       </NotesContext.Provider>
  //     </BrowserRouter>);

  //   expect(wrapper.find(Note).length).toBe(2);
  // });


})
