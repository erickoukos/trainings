import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { name: 'Web Development' },
      update: {},
      create: { name: 'Web Development' }
    }),
    prisma.category.upsert({
      where: { name: 'Data Science' },
      update: {},
      create: { name: 'Data Science' }
    }),
    prisma.category.upsert({
      where: { name: 'Management' },
      update: {},
      create: { name: 'Management' }
    }),
    prisma.category.upsert({
      where: { name: 'Marketing' },
      update: {},
      create: { name: 'Marketing' }
    }),
    prisma.category.upsert({
      where: { name: 'Security' },
      update: {},
      create: { name: 'Security' }
    }),
    prisma.category.upsert({
      where: { name: 'Leadership' },
      update: {},
      create: { name: 'Leadership' }
    })
  ])

  console.log('✅ Categories created')

  // Create admin user
  const hashedPassword = await bcrypt.hash('password', 12)
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@traininghub.com' },
    update: {},
    create: {
      email: 'admin@traininghub.com',
      name: 'Admin User',
      password: hashedPassword,
      role: 'ADMIN',
      isActive: true
    }
  })

  console.log('✅ Admin user created')

  // Create trainers
  const trainers = await Promise.all([
    prisma.trainer.upsert({
      where: { email: 'trainer@traininghub.com' },
      update: {},
      create: {
        name: 'John Doe',
        email: 'trainer@traininghub.com',
        phone: '+234 801 234 5678',
        password: hashedPassword,
        categoryId: categories[0].id, // Web Development
        isActive: true
      }
    }),
    prisma.trainer.upsert({
      where: { email: 'jane.smith@traininghub.com' },
      update: {},
      create: {
        name: 'Jane Smith',
        email: 'jane.smith@traininghub.com',
        phone: '+234 802 345 6789',
        password: hashedPassword,
        categoryId: categories[2].id, // Management
        isActive: true
      }
    }),
    prisma.trainer.upsert({
      where: { email: 'mike.johnson@traininghub.com' },
      update: {},
      create: {
        name: 'Mike Johnson',
        email: 'mike.johnson@traininghub.com',
        phone: '+234 803 456 7890',
        password: hashedPassword,
        categoryId: categories[1].id, // Data Science
        isActive: true
      }
    })
  ])

  console.log('✅ Trainers created')

  // Create sample users
  const users = await Promise.all([
    prisma.user.upsert({
      where: { email: 'user1@example.com' },
      update: {},
      create: {
        email: 'user1@example.com',
        name: 'Alice Johnson',
        password: hashedPassword,
        role: 'USER',
        isActive: true
      }
    }),
    prisma.user.upsert({
      where: { email: 'user2@example.com' },
      update: {},
      create: {
        email: 'user2@example.com',
        name: 'Bob Smith',
        password: hashedPassword,
        role: 'USER',
        isActive: true
      }
    })
  ])

  console.log('✅ Sample users created')

  // Create sample trainings
  const trainings = await Promise.all([
    prisma.training.upsert({
      where: { slug: 'laravel-web-development' },
      update: {},
      create: {
        title: 'Laravel Web Development Masterclass',
        description: 'Complete course on Laravel framework for modern web development. Learn from basics to advanced concepts including authentication, database management, and API development.',
        beginDate: new Date('2024-02-01'),
        endDate: new Date('2024-02-14'),
        requirements: 'Basic knowledge of PHP and HTML/CSS',
        eligibility: 'Open to all developers',
        isCertified: true,
        trainingType: 'ONLINE',
        onlineLink: 'https://meet.google.com/abc-defg-hij',
        hasSeatsLimit: true,
        seatsLimit: 25,
        seatsTaken: 12,
        isPaid: false,
        isActive: true,
        slug: 'laravel-web-development',
        trainerId: trainers[0].id,
        categoryId: categories[0].id
      }
    }),
    prisma.training.upsert({
      where: { slug: 'project-management-professional' },
      update: {},
      create: {
        title: 'Project Management Professional (PMP)',
        description: 'Master project management methodologies, tools, and best practices for successful project delivery.',
        beginDate: new Date('2024-02-15'),
        endDate: new Date('2024-02-22'),
        requirements: '2+ years project management experience',
        eligibility: 'Project managers and team leads',
        isCertified: true,
        trainingType: 'PHYSICAL',
        location: 'Lagos Business School, Victoria Island',
        locationPin: '6.4281,3.4219',
        hasSeatsLimit: true,
        seatsLimit: 30,
        seatsTaken: 8,
        isPaid: true,
        price: 15000,
        isActive: true,
        slug: 'project-management-professional',
        trainerId: trainers[1].id,
        categoryId: categories[2].id
      }
    }),
    prisma.training.upsert({
      where: { slug: 'data-science-machine-learning' },
      update: {},
      create: {
        title: 'Data Science & Machine Learning',
        description: 'Comprehensive data analysis course using Python, pandas, and machine learning algorithms.',
        beginDate: new Date('2024-03-01'),
        endDate: new Date('2024-03-08'),
        requirements: 'Basic programming knowledge',
        eligibility: 'Data analysts and developers',
        isCertified: true,
        trainingType: 'ONLINE',
        onlineLink: 'https://zoom.us/j/123456789',
        hasSeatsLimit: false,
        isPaid: true,
        price: 12000,
        isActive: true,
        slug: 'data-science-machine-learning',
        trainerId: trainers[2].id,
        categoryId: categories[1].id
      }
    })
  ])

  console.log('✅ Sample trainings created')

  // Create sample applications
  const applications = await Promise.all([
    prisma.application.create({
      data: {
        trainingId: trainings[0].id,
        userId: users[0].id,
        name: 'Alice Johnson',
        email: 'user1@example.com',
        phone: '+234 801 234 5678',
        message: 'I am very interested in learning Laravel development.',
        status: 'PENDING'
      }
    }),
    prisma.application.create({
      data: {
        trainingId: trainings[1].id,
        userId: users[1].id,
        name: 'Bob Smith',
        email: 'user2@example.com',
        phone: '+234 802 345 6789',
        message: 'Looking forward to improving my project management skills.',
        status: 'APPROVED'
      }
    })
  ])

  console.log('✅ Sample applications created')

  console.log('🎉 Database seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
