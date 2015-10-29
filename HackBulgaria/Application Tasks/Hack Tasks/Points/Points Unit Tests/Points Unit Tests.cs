using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Points;

namespace Points_Unit_Tests
{
    [TestClass]
    public class PointsTests
    {
        [TestMethod]
        public void CheckIfPointCoordinatesDontChangeAfterEmptyPathInput()
        {
            string directions = "  ";
            Point point = new Point(0, 0);
            DirectionPointer pointer = new DirectionPointer(1);

            foreach (var direction in directions)
            {
                DirectionParser.HandleDirection(direction, point, pointer);
            }

            Assert.AreEqual(new Point(0, 0), point);
        }

        [TestMethod]
        public void CheckIfDirectionPointerDoentChangeIfHasZeroValue()
        {
            string directions = "~~~";
            Point point = new Point(0, 0);
            DirectionPointer pointer = new DirectionPointer(0);

            foreach (var direction in directions)
            {
                DirectionParser.HandleDirection(direction, point, pointer);
            }

            Assert.AreEqual(0, pointer.ValueOfPointer);
        }

        [TestMethod]
        public void CheckIfPointMoveCorrectlyLeftWithDirectionPointerOfOne()
        {
            string directions = "<";
            Point point = new Point(0, 0);
            DirectionPointer pointer = new DirectionPointer(1);

            foreach (var direction in directions)
            {
                DirectionParser.HandleDirection(direction, point, pointer);
            }

            Assert.AreEqual(new Point(-1, 0), point);
        }

        [TestMethod]
        public void CheckIfPointMoveCorrectlyRightWithDirectionPointerOfOne()
        {
            string directions = ">";
            Point point = new Point(0, 0);
            DirectionPointer pointer = new DirectionPointer(1);

            foreach (var direction in directions)
            {
                DirectionParser.HandleDirection(direction, point, pointer);
            }

            Assert.AreEqual(new Point(1, 0), point);
        }

        [TestMethod]
        public void CheckIfPointMoveCorrectlyUpWithDirectionPointerOfOne()
        {
            string directions = "^";
            Point point = new Point(0, 0);
            DirectionPointer pointer = new DirectionPointer(1);

            foreach (var direction in directions)
            {
                DirectionParser.HandleDirection(direction, point, pointer);
            }

            Assert.AreEqual(new Point(0, -1), point);
        }

        [TestMethod]
        public void CheckIfPointMoveCorrectlyDownWithDirectionPointerOfOne()
        {
            string directions = "v";
            Point point = new Point(0, 0);
            DirectionPointer pointer = new DirectionPointer(1);

            foreach (var direction in directions)
            {
                DirectionParser.HandleDirection(direction, point, pointer);
            }

            Assert.AreEqual(new Point(0, 1), point);
        }

        [TestMethod]
        public void CheckIfDirectionPointerReverseWithValueGreaterThanZero()
        {
            string directions = "~";
            Point point = new Point(0, 0);
            DirectionPointer pointer = new DirectionPointer(1);

            foreach (var direction in directions)
            {
                DirectionParser.HandleDirection(direction, point, pointer);
            }

            Assert.AreEqual(-1, pointer.ValueOfPointer);
        }

        [TestMethod]
        public void CheckIfDirectionPointerSetsCorrectValue()
        {
            string directions = " ";
            Point point = new Point(0, 0);
            DirectionPointer pointer = new DirectionPointer(1);
            pointer.ValueOfPointer = 2;

            foreach (var direction in directions)
            {
                DirectionParser.HandleDirection(direction, point, pointer);
            }

            Assert.AreEqual(2, pointer.ValueOfPointer);
        }

        [TestMethod]
        public void CheckIfPointSetsCorrectXValueWhenCraeted()
        {
            string directions = " ";
            Point point = new Point(1, 0);
            DirectionPointer pointer = new DirectionPointer(1);

            foreach (var direction in directions)
            {
                DirectionParser.HandleDirection(direction, point, pointer);
            }

            Assert.AreEqual(1, point.X);
        }

        [TestMethod]
        public void CheckIfPointSetsCorrectYValueWhenCraeted()
        {
            string directions = " ";
            Point point = new Point(0, 1);
            DirectionPointer pointer = new DirectionPointer(1);

            foreach (var direction in directions)
            {
                DirectionParser.HandleDirection(direction, point, pointer);
            }

            Assert.AreEqual(1, point.Y);
        }

        [TestMethod]
        public void CheckIfPointSetsCorrectYValueWhenEdited()
        {
            string directions = " ";
            Point point = new Point(0, 0);
            point.Y = 1;
            DirectionPointer pointer = new DirectionPointer(1);

            foreach (var direction in directions)
            {
                DirectionParser.HandleDirection(direction, point, pointer);
            }

            Assert.AreEqual(1, point.Y);
        }

        [TestMethod]
        public void CheckIfPointSetsCorrectXValueWhenEdited()
        {
            string directions = " ";
            Point point = new Point(0, 0);
            point.X = 1;
            DirectionPointer pointer = new DirectionPointer(1);

            foreach (var direction in directions)
            {
                DirectionParser.HandleDirection(direction, point, pointer);
            }

            Assert.AreEqual(1, point.X);
        }

        [TestMethod]
        public void CheckIfPointToStringProducesCorrectMessage()
        {
            string directions = " ";
            Point point = new Point(0, 0);
            DirectionPointer pointer = new DirectionPointer(1);

            foreach (var direction in directions)
            {
                DirectionParser.HandleDirection(direction, point, pointer);
            }

            Assert.AreEqual("X = 0; Y = 0;", point.ToString());
        }
    }
}
