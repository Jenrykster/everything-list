import * as bcrypt from 'bcrypt';
import {
  NextFunction, Request, Response, Router,
} from 'express';
import User from '@models/app/User';
import logger from '@utils/logger';

interface IPostUserRequestBody {
  username: string,
  password: string
}

type IPostUserRequest = Request<{}, {}, IPostUserRequestBody>;

const userRouter = Router();

userRouter.post('/', async (req: IPostUserRequest, res: Response, next: NextFunction) => {
  logger.info(req.body);

  const { password, username } = req.body;
  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({
        error: 'username must be unique',
      });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
      username,
      passwordHash,
    });

    const savedUser = await user.save();

    return res.status(201).json(savedUser);
  } catch (error) {
    return next(error);
  }
});

export default userRouter;
