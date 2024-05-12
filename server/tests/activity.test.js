import request from 'supertest';
import app from '../app';
import mockingoose from 'mockingoose';
import Hobby from '../models/Hobby';
import User from '../models/User';
import Post from '../models/Post';

describe('Hobby Routes', () => {
    beforeEach(() => {
        mockingoose.resetAll();
    });
    afterEach(() => {
    });

    describe('GET /hobbies/:hobbyId/info', () => {
        it('should return hobby info', async () => {
            const hobbyId = '609f34a038d26817dc0f5467'; // Example hobby ID
            const hobbyName = 'Example Hobby';

            mockingoose(Hobby).toReturn({ _id: hobbyId, name: hobbyName }, 'findOne');

            const response = await request(app)
                .get(`/hobbies/${hobbyId}/info`)
                .expect(200);

            expect(response.body).toEqual(hobbyName);
        });
    });

    describe('POST /hobbies/:author/:hobby', () => {
        it('should join a hobby', async () => {
            const userId = '609f34a038d26817dc0f5468'; // Example user ID
            const hobbyId = '609f34a038d26817dc0f5467'; // Example hobby ID
            const username = 'username'

            const mockUser = { _id: userId, hobbies: [], username: username };
            mockingoose.User.toReturn(mockUser, 'findOne');

            const response = await request(app)
                .post(`/hobbies/${userId}/${hobbyId}`)
                .expect(200);

            const expectedUser = {_id: userId, hobbies: [hobbyId]}
            expect(response.body).toEqual(["Success", expect.objectContaining(expectedUser)]);
        });
    });

    describe('POST hobbies/:author/:hobby/leave', () => {
        it('should leave a hobby', async () => {
            const userId = '609f34a038d26817dc0f5468'; // Example user ID
            const hobbyId = '609f34a038d26817dc0f5467'; // Example hobby ID
            const username = 'username'

            const mockUser = { _id: userId, username: username, hobbies: [hobbyId] };
            mockingoose(User).toReturn(mockUser, 'findOne');

            const response = await request(app)
                .post(`/hobbies/${userId}/${hobbyId}/leave`)
                .expect(200);

            const expected = {_id: userId, username: username, hobbies: []}
            expect(response.body).toEqual(["Success", expect.objectContaining(expected)]);
        });
    });

    describe('POST /hobbies/getId', () => {
        it('should return hobby ID', async () => {
            const hobbyName = 'Example Hobby';
            const hobbyId = '609f34a038d26817dc0f5467'; // Example hobby ID


            mockingoose(Hobby).toReturn({ _id: hobbyId }, 'findOne');

            const response = await request(app)
                .post('/hobbies/getId')
                .send({ hobbyName })
                .expect(200);

            expect(response.body).toEqual(hobbyId);
        });
    });
});

describe('Post Routes', () => {
    afterEach(() => {
        mockingoose.resetAll(); // Reset Mockingoose after each test
    });

    describe('POST posts/:author/newpost', () => {
        it('should create a new post', async () => {
            const userId = '609f34a038d26817dc0f5468'; // Example user ID
            const username = 'username';
            const hobbyName = 'Example Hobby';

            const mockHobby = { _id: '609f34a038d26817dc0f5467', name: hobbyName };
            const mockUser = { _id: userId, username: username };
            mockingoose(Hobby).toReturn(mockHobby, 'findOne');
            mockingoose(User).toReturn(mockUser, 'findOne');
            mockingoose(Post).toReturn({}, 'save');

            const response = await request(app)
                .post(`/posts/${userId}/newpost`)
                .send({ hid: hobbyName, content: 'Test post content' })
                .expect(200);

            expect(response.body).toEqual({ message: 'Success' });
        });
    });

    describe('GET /posts/:author/feed', () => {
        it('should return user feed', async () => {
            const userId = '609f34a038d26817dc0f5468';

            const mockUser = { _id: userId };
            mockingoose(User).toReturn(mockUser, 'findOne');
            mockingoose(Post).toReturn([{ _id: '609f34a038d26817dc0f5467', content: 'Test post 1' }], 'find');

            const response = await request(app)
                .get(`/posts/${userId}/feed`)
                .expect(200);

            expect(response.body).toEqual([expect.objectContaining({ _id: '609f34a038d26817dc0f5467', content: 'Test post 1' })]);
        });
    });

    describe('GET /posts/:author/hobbies', () => {
        it('should return user hobby feed', async () => {
            const userId = '609f34a038d26817dc0f5468';
            const username = 'username';

            const mockUser = { _id: userId, hobbies: ['609f34a038d26817dc0f5467'], username: username };
            mockingoose(User).toReturn(mockUser, 'findOne');
            mockingoose(Post).toReturn([{ _id: '609f34a038d26817dc0f5467', content: 'Test post 1' }], 'find');

            const response = await request(app)
                .get(`/posts/${userId}/hobbies`)
                .expect(200);

            expect(response.body).toEqual([expect.objectContaining({ _id: '609f34a038d26817dc0f5467', content: 'Test post 1' })]);
        });
    });

    describe('DELETE /posts/delete', () => {
        it('should delete a post', async () => {
            const postId = '609f34a038d26817dc0f5467'; // Example post ID


            mockingoose(Post).toReturn({_id: postId}, 'findOne');

            const response = await request(app)
                .delete(`/posts/delete`)
                .send({ id: postId })
                .expect(200);

            expect(response.body).toEqual({ message: 'Post Deleted' });
        });
    });

    describe('POST /posts/comment', () => {
        it('should add a comment to a post', async () => {
            const postId = '609f34a038d26817dc0f5467'; // Example post ID
            const isoDate = '2011-10-05T14:48:00.000Z';
            mockingoose(Post).toReturn({ _id: postId, timestamp: isoDate}, 'findOne');
            mockingoose(Post).toReturn({}, 'save');

            const response = await request(app)
                .post(`/posts/comment`)
                .send({ id: postId, content: 'Test comment' })
                .expect(200);

            expect(response.body).toEqual({});
        });
    });

    describe('GET /posts/:id/like', () => {
        it('should increment post likes', async () => {
            const postId = '609f34a038d26817dc0f5467';
            const isoDate = '2011-10-05T14:48:00.000Z';

            mockingoose(Post).toReturn({ _id: postId, timestamp: isoDate, likes: 0 }, 'findOne');

            const response = await request(app)
                .get(`/posts/${postId}/like`)
                .expect(200);

            expect(response.body.likes).toEqual(1);
        });
    });

    describe('GET /posts/:id/unlike', () => {
        it('should decrement post likes', async () => {
            const postId = '609f34a038d26817dc0f5467';
            const isoDate = '2011-10-05T14:48:00.000Z';

            mockingoose(Post).toReturn({ _id: postId, likes: 1, timestamp: isoDate  }, 'findOne');

            const response = await request(app)
                .get(`/posts/${postId}/unlike`)
                .expect(200);

            expect(response.body.likes).toEqual(0);
        });
    });
});