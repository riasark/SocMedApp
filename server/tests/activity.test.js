import request from 'supertest';
import app from '../server';
import mockingoose from 'mockingoose';
import Hobby from '../models/Hobby';
import User from '../models/User';
import Post from '../models/Post';

let baseurl = "http://localhost:3030"

describe('Hobby Routes', () => {
    beforeEach(() => {
        mockingoose.resetAll();
    });
    afterEach(() => {
    });

    describe('GET /:hobbyId/info', () => {
        it('should return hobby info', async () => {
            const hobbyId = '609f34a038d26817dc0f5467'; // Example hobby ID
            const hobbyName = 'Example Hobby';

            mockingoose(Hobby).toReturn({ _id: hobbyId, name: hobbyName }, 'findOne');

            const response = await request(app)
                .get(`hobbies/${hobbyId}/info`)
                .expect(200);

            expect(response.body).toEqual(hobbyName);
        });
    });

    describe('POST /:author/:hobby', () => {
        it('should join a hobby', async () => {
            const userId = '609f34a038d26817dc0f5468'; // Example user ID
            const hobbyId = '609f34a038d26817dc0f5467'; // Example hobby ID

            const mockUser = { _id: userId, hobbies: [] };
            mockingoose(User).toReturn(mockUser, 'findByIdAndUpdate');

            const response = await request(app)
                .post(`hobbies/${userId}/${hobbyId}`)
                .expect(200);

            expect(response.body).toEqual(["Success", expect.objectContaining(mockUser)]);
        });
    });

    describe('POST /:author/:hobby/leave', () => {
        it('should leave a hobby', async () => {
            const userId = '609f34a038d26817dc0f5468'; // Example user ID
            const hobbyId = '609f34a038d26817dc0f5467'; // Example hobby ID

            const mockUser = { _id: userId, hobbies: [hobbyId] };
            mockingoose(User).toReturn(mockUser, 'findByIdAndUpdate');

            const response = await request(app)
                .post(`${userId}/${hobbyId}/leave`)
                .expect(200);

            expect(response.body).toEqual(["Success", expect.objectContaining(mockUser)]);
        });
    });

    describe('POST /getId', () => {
        it('should return hobby ID', async () => {
            const hobbyName = 'Example Hobby';
            const hobbyId = '609f34a038d26817dc0f5467'; // Example hobby ID

            mockingoose(Hobby).toReturn({ _id: hobbyId }, 'findOne');

            const response = await request(app)
                .post('/getId')
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

    describe('POST /:author/newpost', () => {
        it('should create a new post', async () => {
            const userId = '609f34a038d26817dc0f5468'; // Example user ID
            const hobbyName = 'Example Hobby';

            const mockHobby = { _id: '609f34a038d26817dc0f5467', name: hobbyName };
            const mockUser = { _id: userId };
            mockingoose(Hobby).toReturn(mockHobby, 'findOne');
            mockingoose(User).toReturn(mockUser, 'findById');
            mockingoose(Post).toReturn({}, 'save');

            const response = await request(app)
                .post(`/${userId}/newpost`)
                .send({ hid: hobbyName, content: 'Test post content' })
                .expect(200);

            expect(response.body).toEqual({ message: 'Success' });
        });
    });

    describe('GET /:author/feed', () => {
        it('should return user feed', async () => {
            const userId = '609f34a038d26817dc0f5468'; // Example user ID

            const mockUser = { _id: userId };
            mockingoose(User).toReturn(mockUser, 'findById');
            mockingoose(Post).toReturn([{ _id: '609f34a038d26817dc0f5467', content: 'Test post 1' }], 'find');

            const response = await request(app)
                .get(`/${userId}/feed`)
                .expect(200);

            expect(response.body).toEqual([{ _id: '609f34a038d26817dc0f5467', content: 'Test post 1' }]);
        });
    });

    describe('GET /:author/hobbies', () => {
        it('should return user hobby feed', async () => {
            const userId = '609f34a038d26817dc0f5468'; // Example user ID

            const mockUser = { _id: userId, hobbies: ['609f34a038d26817dc0f5467'] };
            mockingoose(User).toReturn(mockUser, 'findById');
            mockingoose(Post).toReturn([{ _id: '609f34a038d26817dc0f5467', content: 'Test post 1' }], 'find');

            const response = await request(app)
                .get(`/${userId}/hobbies`)
                .expect(200);

            expect(response.body).toEqual([{ _id: '609f34a038d26817dc0f5467', content: 'Test post 1' }]);
        });
    });

    describe('DELETE /delete', () => {
        it('should delete a post', async () => {
            const postId = '609f34a038d26817dc0f5467'; // Example post ID

            mockingoose(Post).toReturn({}, 'deleteOne');

            const response = await request(app)
                .delete(`/delete`)
                .send({ id: postId })
                .expect(200);

            expect(response.body).toEqual({ message: 'Post Deleted' });
        });
    });

    describe('POST /comment', () => {
        it('should add a comment to a post', async () => {
            const postId = '609f34a038d26817dc0f5467'; // Example post ID

            mockingoose(Post).toReturn({ _id: postId, comments: [] }, 'findByIdAndUpdate');

            const response = await request(app)
                .post(`/comment`)
                .send({ id: postId, content: 'Test comment' })
                .expect(200);

            expect(response.body).toEqual({});
        });
    });

    describe('GET /:id/like', () => {
        it('should increment post likes', async () => {
            const postId = '609f34a038d26817dc0f5467'; // Example post ID

            mockingoose(Post).toReturn({ _id: postId, likes: 0 }, 'findByIdAndUpdate');

            const response = await request(app)
                .get(`/${postId}/like`)
                .expect(200);

            expect(response.body.likes).toEqual(1);
        });
    });

    describe('GET /:id/unlike', () => {
        it('should decrement post likes', async () => {
            const postId = '609f34a038d26817dc0f5467'; // Example post ID

            mockingoose(Post).toReturn({ _id: postId, likes: 1 }, 'findByIdAndUpdate');

            const response = await request(app)
                .get(`/${postId}/unlike`)
                .expect(200);

            expect(response.body.likes).toEqual(0);
        });
    });
});
